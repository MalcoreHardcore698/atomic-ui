import React, { Children, isValidElement, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { v4 } from 'uuid'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const TabList = styled.ul`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  background: linear-gradient(to top, rgba(0, 0, 0, 15%) 1px, transparent 1px) 0 100% no-repeat;
  margin-bottom: 20px;
`

export const TabListItem = styled.li`
  position: relative;
  display: inline-flex;
  margin-right: 40px;
  padding-bottom: 12px;
  font-family: var(--default-font-family);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1;
  color: rgba(0, 0, 0, 75%);
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 0.2s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: black;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--default-color-accent);
      border-color: var(--default-color-accent);

      &:hover {
        color: var(--default-color-accent);
      }
    `}
`

export const TabPanel = styled.div`
  flex: 1;
  flex-direction: column;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
`

export const getKey = (key) => {
  if (key === 'Right' || key === 'ArrowRight') {
    return 'ArrowRight'
  } else if (key === 'Left' || key === 'ArrowLeft') {
    return 'ArrowLeft'
  } else {
    return key
  }
}

export const direction = {
  ArrowLeft: -1,
  ArrowRight: 1
}

export const Tab = ({ children }) => <React.Fragment>{children}</React.Fragment>

export const Tabs = ({ active, onActivate, label: ariaLabel, children, ...props }) => {
  const [activeTab, setActiveTab] = useState(0)
  const tabsCount = Children.count(children)
  const tabs = [...new Array(tabsCount)].map(() => React.createRef())
  const [isFocus, setFocus] = useState(false)

  const activateTab = (index, focus = true) => {
    if (activeTab === index) return
    if (onActivate) onActivate(index)
    setActiveTab(index)
    setFocus(focus)
  }

  const activateFirstTab = () => {
    activateTab(0)
  }

  const activateLastTab = () => {
    activateTab(tabs.length - 1)
  }

  const switchTab = (index, e) => {
    const key = getKey(e.key)

    if (tabs[index + direction[key]]) {
      activateTab(index + direction[key])
    } else if (key === 'ArrowLeft') {
      activateLastTab()
    } else if (key === 'ArrowRight') {
      activateFirstTab()
    }
  }

  const handleClick = (index) => () => {
    activateTab(index)
  }

  const handleKeyDown = (index) => (e) => {
    const key = getKey(e.key)

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      switchTab(index, e)
    } else if (key === 'Home') {
      e.preventDefault()
      activateFirstTab()
    } else if (key === 'End') {
      e.preventDefault()
      activateLastTab()
    }
  }

  useEffect(() => {
    if (active === undefined) return

    if (active !== activeTab) {
      activateTab(active, false)
    }
  }, [active])

  useEffect(() => {
    if (isFocus) {
      tabs[activeTab].current.focus()
      setFocus(false)
    }
  }, [isFocus])

  return (
    <Container {...props}>
      <TabList role={'tablist'} aria-label={ariaLabel}>
        {Children.map(children, (child, index) => {
          const isActive = index === activeTab

          if (isValidElement(child)) {
            const { label, count } = child.props
            return (
              <TabListItem
                ref={tabs[index]}
                key={`tab-${v4()}`}
                id={`tab-${v4()}`}
                role="tab"
                aria-controls={`panel-${v4()}`}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : undefined}
                isActive={isActive}
                onClick={handleClick(index)}
                onKeyDown={handleKeyDown(index)}>
                {label}
                {count !== undefined && count > 0 && ` (${count})`}
              </TabListItem>
            )
          }
          return null
        })}
      </TabList>

      {Children.map(children, (child, index) => {
        const isActive = index === activeTab

        if (isValidElement(child)) {
          return (
            <TabPanel
              key={`tabpanel-${v4()}`}
              id={`tabpanel-${v4()}`}
              role="tabpanel"
              aria-labelledby={`tab-${v4()}`}
              isActive={isActive}>
              {child}
            </TabPanel>
          )
        }
        return null
      })}
    </Container>
  )
}

export default Tabs
