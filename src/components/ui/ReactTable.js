import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import cellEditFactory, { Type } from "react-bootstrap-table2-editor"
import {Modal, Button} from 'react-bootstrap'
import Map from '../layout/Map'
import AppContext from '../../context/api/AppContext'
import Spinner from '../layout/Spinner'
import moment from "moment"




const ReactTable = () => {

  const appContext = useContext(AppContext); 

  const {loading, meteors} =appContext
  console.log(loading)

  const [meteorData, setMeteors] = useState([])
  const [modalInfo, setModalInfo] = useState([])
  const [showModal, setShowModal] = useState( false)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const getMeteors = async () => {
    try {
      const result = await axios(
        `https://data.nasa.gov/resource/gh4g-9sfh.json?$$app_token=${process.env.REACT_APP_NASA_TOKEN}&$where=year between '1900-01-01T00:00:00.000' and '2020-01-01T00:00:00.000'&$limit=50000&$order=year ASC`
        )
      setMeteors(result.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMeteors()
  }, [])


  const columns = [
    { dataField: "name", text: "Name" ,  sort: true},
    { dataField: "year", text: "Year", sort: true, formatter: (cell) => {
      let dateObj = cell;
      if (typeof cell !== 'object') {
        dateObj = new Date(cell);
      }
      return moment(dateObj).format("yyyy");
    },
    editor: {
      type: Type.DATE
    }},
    { dataField: "mass", text: "Size",  sort: true},
    { dataField: "recclass", text: "Composition" },
    { dataField: "reclat", text: "Latitude", hidden: true },
    { dataField: "reclong", text: "Longditude", hidden: true },
  ]

  const rowEvents = {
    onClick: (e, row) => {
      console.log(row)
      setModalInfo(row)
      toggleTrueFalse()
      
    
    },
  }
  console.log(modalInfo.reclat)
  const toggleTrueFalse = () => {
    setShowModal(handleShow)
  }

  const style = {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    margin: 0,
    padding: 0,
    position: 'absolute',
  };
  var showMap = true; 
  if (modalInfo.reclat === null) {
    showMap = false
  } else {
    showMap = true
  }
  const ModalContent = () => {
    return (
     
      <Modal  size="lg"
      show={show} onHide={handleClose}
>
        <Modal.Header closeButton>
        <Modal.Title>{modalInfo.name}</Modal.Title>

        </Modal.Header>        
        <Modal.Body size="lg">
       
          <Map modalInfo={modalInfo} />
        


        
        </Modal.Body>
       
        <Modal.Footer>
      
          <Button variant="secondary" onClick={handleClose} >Close</Button>
        </Modal.Footer>
        </Modal>
      
    )
  }
  return (
    <div >
      {/* <h1>Pagination</h1> */}
      <BootStrapTable 
        keyField="name"
        data={meteorData}
        columns={columns}
        pagination={paginationFactory()}
        rowEvents={rowEvents}
        hideSizePerPage= {true}

      />
    {show ? <ModalContent/> :null}
    </div>
  )
}
export default ReactTable
