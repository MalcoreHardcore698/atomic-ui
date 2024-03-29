import React, { useState, useCallback } from 'react'
import AvatarEditor from 'react-avatar-editor'
import styled, { css } from 'styled-components'
import imageCompression from 'browser-image-compression'
import { useDropzone } from 'react-dropzone'
import { v4 } from 'uuid'

import Image from '../Image'
import Text from '../Text'
import Button from '../Button'
import Grid from '../Grid'
import Tooltip from '../Tooltip'
import Icon from '../Icon'

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;

  width: 100%;
  height: 256px;
  min-height: 256px;
`

export const InfoTooltip = styled(Tooltip)`
  position: absolute;
  right: var(--default-gap);
  bottom: var(--default-gap);
  z-index: var(--z-15);
`

export const InfoIcon = styled(Icon)`
  cursor: pointer;
  transition: opacity 450ms ease;

  &:hover {
    opacity: 0.65;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: var(--z-12);

  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-s);
  font-family: var(--font-family);
  color: var(--input-placeholder-color);

  width: 100%;
  height: 100%;
  border-radius: var(--surface-border-radius);
  border: 2px dashed var(--input-placeholder-color);
  outline: none;
  overflow: hidden;
  flex-grow: 1;

  cursor: pointer;
  transition: all 150ms ease;

  ${({ error }) =>
    error &&
    css`
      color: var(--default-color-red);
      border: 2px dashed var(--default-color-red);
    `}

  &:hover {
    color: var(--default-color-accent);
    border: 2px dashed var(--default-color-accent);

    ${({ error }) =>
      error &&
      css`
        color: var(--default-color-red);
        border: 2px dashed var(--default-color-red);
      `}
  }
`

export const Area = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > span {
    height: 100%;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 1rem;
  background: #fff;
  width: fit-content;
  border: 1px solid rgba(0, 0, 0, 15%);
`

const MiddleOriented = styled.div`
  margin: 0 auto;
  text-align: center;
`

const ActionsLayout = styled.div`
  input {
    width: 100%;
  }
`

const ButtonsLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`

export const PreviewList = styled(Grid)`
  img {
    height: 128px;
  }
`

export const Preview = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--surface-border-radius);
`

export const Placeholder = styled(Text)`
  color: inherit;
  padding: var(--default-gap);
  text-align: center;
`

export function getFile(file) {
  return { file, id: v4(), blob: file.type?.includes('image') && URL.createObjectURL(file) }
}

export async function compressedUpload(file, maxWidthOrHeight = 1366) {
  try {
    return await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight,
      useWebWorker: true
    })
  } catch (error) {
    console.log(error)
  }
}

export const Dropzone = ({
  style,
  accept,
  avatar,
  className,
  defaultValue,
  placeholder,
  tooltip,
  multiple,
  maxFiles,
  onChange
}) => {
  const [error, setError] = useState(false)
  const [images, setImages] = useState([])
  const [initScale, setScale] = useState([0.8])
  const [avatarState, setAvatar] = useState(false)
  const [avatarHistory, setHistory] = useState([])

  const onDrop = useCallback(
    async (droppedFiles) => {
      setError(false)

      if (avatar) {
        setAvatar(true)
      }

      if (droppedFiles.length > maxFiles || droppedFiles.length === 0) {
        setError(true)
        return false
      }

      const candidate = multiple ? [] : await compressedUpload(droppedFiles[0])

      if (multiple) {
        for (let file of droppedFiles) {
          let compressedFile
          let miniature

          if (file.type?.includes('image')) {
            compressedFile = await compressedUpload(file)
            miniature = await compressedUpload(file, 185)
          } else {
            compressedFile = file
          }

          if (compressedFile) {
            candidate.push({
              ...getFile(compressedFile),
              size: compressedFile.size,
              miniature: {
                ...getFile(miniature),
                size: miniature.size
              }
            })
          }
        }
      }

      const result =
        candidate.length > 0
          ? candidate
          : {
              ...getFile(candidate),
              size: droppedFiles[0].size
            }

      setImages(result)
      if (onChange) {
        onChange(result)
      }
    },
    [setImages]
  )

  let imageScaled = null
  const handleScale = (e) => {
    const scale = parseFloat(e.target.value)
    setScale(scale)
  }

  const clearImages = () => {
    setAvatar(false)
    if (!avatarHistory) {
      setImages('')
    } else {
      setImages(avatarHistory)
    }
  }

  const onClickSave = () => {
    if (imageScaled) {
      const canvasScaled = imageScaled.getImageScaledToCanvas()
      images.blob = canvasScaled.toDataURL('image/png')
      setImages(images)
      setAvatar(false)
      setHistory(images)
    }
  }

  const setEditorRef = (editor) => (imageScaled = editor)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    avatar,
    accept,
    initScale,
    handleScale,
    clearImages,
    onClickSave,
    setEditorRef
  })

  return (
    <Wrap className={className} style={style}>
      {tooltip && (
        <InfoTooltip text={tooltip} maxWidth={215}>
          <InfoIcon
            size={'s'}
            icon={'infoCircle'}
            stroke={defaultValue?.length > 0 ? 'white' : 'var(--default-color-accent)'}
          />
        </InfoTooltip>
      )}

      {avatarState && images.blob && (
        <Overlay>
          <MiddleOriented>
            <AvatarEditor
              image={images.blob || defaultValue?.path || defaultValue?.blob}
              width={220}
              height={256}
              border={10}
              color={[255, 255, 255, 0.6]}
              scale={parseFloat(initScale)}
              rotate={0}
              ref={setEditorRef}
            />
          </MiddleOriented>
          <ActionsLayout>
            <input
              name="scale"
              type="range"
              onChange={handleScale}
              min="0.8"
              max="2"
              step="0.01"
              defaultValue="0.8"
            />
            <ButtonsLayout>
              <Button appearance={'default'} onClick={onClickSave}>
                Сохранить
              </Button>
              <Button appearance={'outlined'} onClick={clearImages}>
                Отмена
              </Button>
            </ButtonsLayout>
          </ActionsLayout>
        </Overlay>
      )}

      <Container className={'dropzone-container'} {...getRootProps()} error={error}>
        <input accept={accept} {...getInputProps()} hidden />
        <Area className={'dropzone-area'} active={isDragActive}>
          {!defaultValue && images.length === 0 && (
            <Placeholder>
              {error ? `Файлов не может быть больше ${maxFiles} или равно нулю` : placeholder}
            </Placeholder>
          )}

          {multiple &&
            ((Array.isArray(images) && images.length > 0) ||
              (Array.isArray(defaultValue) && defaultValue?.length > 0)) && (
              <PreviewList percentage={'minmax(196px, 1fr)'}>
                {(defaultValue || images).map((file) => (
                  <Preview key={v4()} src={file?.blob || file} alt={file.id} />
                ))}
              </PreviewList>
            )}

          {!multiple && (!Array.isArray(images) || defaultValue) && (
            <Preview
              src={images.blob || defaultValue?.path || defaultValue?.blob}
              alt={defaultValue?.name}
            />
          )}
        </Area>
      </Container>
    </Wrap>
  )
}

Dropzone.defaultProps = {
  maxFiles: 1,
  multiple: false
}

export default Dropzone
