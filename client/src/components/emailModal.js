import React from 'react';


export default (props)=>{

    this.handleClose = ()=>{
        console.log('handleclose accessed'); 
        const modal = document.getElementById('emailModal');
        modal.classList.remove("slideModalToggle")

    }


    return(
        <div id="emailModal" className="modal">

            <div className="modal-content">
                <p>Mail was sent out succesfully.</p>
            </div>
            <div className="modal-footer">
                <a onClick={this.handleClose} href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            </div>

         </div>

    )

}