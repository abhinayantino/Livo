import React from 'react'
import './TaxesDropDown.css'
import Button from "@mui/material/Button";


function TaxesDropDown() {
  return (
      <div className='taxes--drop'>
        {/* tax--heading */}
        <div className='taxes--heading'>
            <p className='taxes--heading--text'>Select Applicable Taxes</p>
              {/* <button>Save</button> */}
            <Button
                className="Button"
                variant="contained"
                color="success"
                // onClick={() => _ref.current.click()}
            //   onClick={() => SetDisabled(false)}
                style={{
                border: "1px solid #0C344E",
                color: "white",
                background: "#0C344E",
                // width: "130px",
                height: "48px",
                borderRadius: "8px",
                marginTop: "-1rem",
                marginBottom: "-1rem",
                // display: !disabled ? "none" : "block",
            }}
            >
                Save
            </Button>
        </div>
        {/* tax--dropdown */}
        <div className='taxes--checkbox'>
            <div className='taxes--checkbox--options'>    
                <label>
                    <input type='checkbox' />
                    0%
                </label>
            </div>
            <div className='taxes--checkbox--options'>    
                <label>
                    <input type='checkbox' />
                    5%
                </label>
            </div>
            <div className='taxes--checkbox--options'>    
                <label>
                    <input type='checkbox' />
                    12%
                </label>
            </div>
            <div className='taxes--checkbox--options'>    
                <label>
                    <input type='checkbox' />
                    18%
                </label>
            </div>
        </div>
    </div>
  )
}

export default TaxesDropDown