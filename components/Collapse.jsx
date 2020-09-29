import React, { useState } from 'react'
import { MDBBtn, MDBCollapse, MDBIcon } from 'mdbreact'

export const Collapse = ({ titre, children }) => {
  const [collapseID, setCollapseID] = useState('')

  const toggleCollapse = collapseID => ({ titre, children }) => {
    setCollapseID(
      prevState => (collapseID = prevState !== collapseID ? collapseID : '')
    )
  }
  const style = {
    CollapseContainer: {
      padding: 10,
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      fontSize: 18
    }
  }

  return (
    <>
      <div
        onClick={toggleCollapse('basicCollapse')}
        style={style.CollapseContainer}
        className='row'
      >
        <div className='col-10 font-weight-bolder'>{titre}</div>
        <div style={style.CollapseIcon} className='col-2 text-center'>
          <MDBIcon
            icon={collapseID && collapseID !== '' ? `angle-up` : `angle-down`}
            size='2x'
          />
        </div>
      </div>

      <MDBCollapse id='basicCollapse' isOpen={collapseID}>
        <div>{children}</div>
      </MDBCollapse>
    </>
  )
}
