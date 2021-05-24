import React, { Component } from 'react'
import '../DashBoardUI/main.css'

class SideBarData extends Component {
    render() {
        return (
            <div>
                <div className="navContainer">
                    <div className="navHeading">{this.props.heading}</div>
                    <div className="navIcons">{this.props.icon}</div>
                    {/* <div className="navIcon2"> <i class="fa fa-angle-down" aria-hidden="true"></i>  </div> */}
                </div>
            </div>
        )
    }
}

export class SideBar extends Component {
    render() {
        return (
            <>
                <div className="SideBarContainer">
                    <div className="mainHeading">
                        <h1>Sit<span>Bank</span></h1>
                    </div>
                    <div className="sideBarData">
                        <SideBarData heading={"Home"} icon={<i class="fa fa-home" aria-hidden="true"></i>} />
                        <SideBarData heading={"Conta Digital"} icon={<i class="fa fa-mobile" aria-hidden="true"></i>} />
                        <SideBarData heading={"Credits"} icon={<i class="fa fa-usd" aria-hidden="true"></i>}/>
                        <SideBarData heading={"Investimentos"} icon={<i class="fa fa-line-chart" aria-hidden="true"></i>}/>
                        <SideBarData heading={"Seguros"} icon={<i class="fa fa-umbrella" aria-hidden="true"></i>} />
                        <SideBarData heading={"Recharge"} icon={<i class="fa fa-phone" aria-hidden="true"></i>}/>
                        <SideBarData heading={"Sua Seguranca"} icon={<i class="fa fa-shield" aria-hidden="true"></i>}/>
                    </div>
                    <div className="UserData">
                            <img src="userImage.png" alt="User" className="bottomImage"/>
                        <div className="userName">
                            <span><p>Mr. Salvator</p></span>
                            <p>Account Info</p>
                        </div>
                        <div className="bottonIcon">
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default SideBar
