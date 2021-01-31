import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

export const TextEditor = ({ apiKey, defaultValue, onChange }) => (
  <Editor
    apiKey={apiKey}
    init={{
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen table',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar:
        'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | table tabledelete | \
        tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | \
        tableinsertcolbefore tableinsertcolafter tabledeletecol | help'
    }}
    value={defaultValue}
    onEditorChange={onChange}
  />
)

export default TextEditor
