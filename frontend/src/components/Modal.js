import React, { useState,useEffect } from 'react';
import {getScans} from '../services/production/Get'

const Modal = (props) => {
    const [scans, setScans] = useState([])

    useEffect(() => {
        let mounted = true;
        getScans(props.sku)
        .then(items => {
            if(mounted) {
                setScans(items.data);
            }
        })
        return () => mounted = false;
        }, [props])

    function render_location(code) {

        const locations = {
            '301': 'FRANKFORD',
            '201': 'RED LION',
            '101': 'TEST',
            '401': 'ERIE',
            '501': 'NEW YORK',
            '601': 'LONDON'
        }

        return locations[code]

    }

    function render_scans() {
        if ( scans ) {
            return (
                scans.map( object => {
                    return(
                        <p>{render_location(object.attributes.location)} - {object.attributes.time_scan} </p>
                    )
                })
            )
        } else {
            return (<p> this product has no scans</p>)
        }


    }

    // getScans(props.sku).then(items => setScans(items.data) )

    return (
        <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                    WAREHOUSE SCANS FOR {props.sku}
                </h3>
                <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setShowModal(false)}
                >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                    </span>
                </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">

                {
                    render_scans()
                }


                </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                >
                    Close
                </button>
                </div>
            </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

)}

export default Modal;
