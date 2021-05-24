import React, { Component } from 'react'
import '../DashBoardUI/main.css'
import SideBar from '../DashBoardUI/SideBar.js'

export class FirstRowData extends Component {
    render() {
        return (
            <>
                <div className="firstRowContainer">
                    <div className="firstRow-icon">{this.props.icon}</div>
                    <div className="firstRow-heading">{this.props.heading}</div>
                </div>
            </>
        )
    }
}

export class SecondRowData extends Component {
    render() {
        return (
            <>
                <div className="secRowContainer">
                    <div className="secFirstRow">
                        <div className="secRow-icons">{this.props.icons}</div>
                        <div className="secRow-text">{this.props.text}</div>
                        <i class="fa fa-eye-slash" aria-hidden="true"></i>
                    </div>
                    {this.props.image}
                </div>
            </>
        )
    }
}

export class ThirdRowData extends Component {
    render() {
        return (
            <>
                <div className="thirdRowContainer">

                    <div className="details">
                        <div className="details-icon">
                            {this.props.icons}
                        </div>
                        <div className="details-heading">
                            {this.props.heading}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export class ThirdRowDataTwo extends Component {
    render() {
        return (
            <>
                <div className="trc-secRow">
                    <div className="trc-heading">
                        {this.props.heading2}
                    </div>
                    <div className="trc-detail">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <div className="text">{this.props.text}</div>
                        <div className="box">{this.props.box}</div>
                    </div>
                </div>
            </>
        )
    }
}


class MainComponent extends Component {
    render() {
        return (
            <>
                <div className="mainContainer">
                    <div className="firstCol">
                        <SideBar />
                    </div>
                    <div className="secCol">
                        <div className="firstRow">
                            <FirstRowData icon={<i class="fa fa-exchange" aria-hidden="true"></i>} heading={"Transitions"} />
                            <FirstRowData icon={<i class="fa fa-barcode" aria-hidden="true"></i>} heading={"Pagamentos"} />
                            <FirstRowData icon={<i class="fa fa-line-chart" aria-hidden="true"></i>} heading={"Investments"} />
                            <FirstRowData icon={<i class="fa fa-credit-card" aria-hidden="true"></i>} heading={"Credits"} />
                            <FirstRowData icon={<i class="fa fa-gift" aria-hidden="true"></i>} heading={"Gift Card"} />
                            <FirstRowData icon={<i class="fa fa-umbrella" aria-hidden="true"></i>} heading={"Seguros"} />
                        </div>
                        <div className="secRow">
                            <SecondRowData icons={<i class="fa fa-file-text-o" aria-hidden="true"></i>} text={"EXtrato"} image={<img src="first.png" alt="first" />} />
                            <SecondRowData icons={<i class="fa fa-credit-card-alt" aria-hidden="true"></i>} text={"MasterCard 5304 "} image={<img src="second.png" alt="second" />} />
                            <SecondRowData icons={<i class="fa fa-product-hunt" aria-hidden="true"></i>} text={"platforma Aberta SitBank"} image={<img src="third.png" alt="third" />} />
                        </div>
                        <div className="thirdRow">
                            <div className="trc-firstRow">
                                <div className="shopping">
                                    <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                    <div className="shopping-content">
                                    <h3>Shopping</h3>
                                    <p>aproveite os produtos <br/>com cashback !</p>
                                    </div>
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </div>
                                <div className="iconssss">
                                <ThirdRowData icons={<i class="fa fa-home" aria-hidden="true"></i>} heading={"Home"} />
                                <ThirdRowData icons={<i class="fa fa-cogs" aria-hidden="true"></i>} heading={"Entertainment"} />
                                <ThirdRowData icons={<i class="fa fa-volume-control-phone" aria-hidden="true"></i>} heading={"Tecnology"} />
                                <ThirdRowData icons={<i class="fa fa-car" aria-hidden="true"></i>} heading={"Transportation"} />
                                <ThirdRowData icons={<i class="fa fa-futbol-o" aria-hidden="true"></i>} heading={"Explore"} />
                            </div>
                            </div>
                            <div className="divsecond">
                            <ThirdRowDataTwo heading2={"Home Equity Info Bank"} text={"Tax pre-fixed 1%"} box={"Solicitar agora"} />
                            <ThirdRowDataTwo heading2={"Enterprise, credit per user"} text={"Tax pre-fixed 1.5%"} box={"Solicitar agora"} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default MainComponent
