import React from 'react';
import {
    CDBBox,
    CDBFooter,
    CDBFooterLink,
    CDBBtn,
    CDBIcon,
    CDBContainer,
} from 'cdbreact';

export default class Footer extends React.Component {
    render() {
        return (
            <CDBFooter className="shadow">
                <CDBBox
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                    className="mx-auto py-4 flex-wrap"
                    style={{ width: '80%' }}
                >
                    <CDBBox display="flex" alignItems="center">
                        <a
                            href="/"
                            className="d-flex align-items-center p-0 text-dark"
                        >
                            <span className="ml-4 h5 mb-0 font-weight-bold">
                                Hamza Sher Khan
                            </span>
                        </a>
                        <small className="ml-2">
                            &copy; 
                        </small>
                    </CDBBox>
                    <CDBBox display="flex"><a href="https://github.com/hamzasherxdxd" target="_blank" className="no-underline">
                        <CDBBtn flat color="dark" className="p-2" >
                            <CDBIcon fab icon="github" />
                        </CDBBtn></a><a href="https://www.linkedin.com/in/hamzasher/" target="_blank" className="no-underline">
                        <CDBBtn flat color="dark" className="mx-3 p-2">
                            <CDBIcon fab icon="linkedin" />
                        </CDBBtn></a><a href="mailto:hamzasher223@gmail.com" target="_blank" className="no-underline">
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="google" />
                        </CDBBtn></a>
                    </CDBBox>
                </CDBBox>
            </CDBFooter>
        );
    }
}
