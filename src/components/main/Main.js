import "./Main.css";
import hello from "../../assets/hello.svg"
import Chart from "../charts/Chart";
const Main=()=>{
    return(
        <main>
            <div className="main_container">
                <div className="main_title">
                    <img src={hello} alt="hello"/>
                    <div className="main_greeting">
                        <h1>Hello Blackcoffer</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>

                <div className="main_cards">

                    <div className="card">
                        <i className="fa fa-flag fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of countries</p>
                            <span className="font-bold text-title">576</span>
                        </div>
                    </div>

                   <div className="card">
                       <i className="fa fa-calendar fa-2x text-red"></i>
                       <div className="card_inner">
                           <p className="text_primary-p">Years</p>
                           <span className="font-bold text-title">1800</span>
                       </div>
                   </div>

                   <div className="card">
                       <i className="fa fa-video-camera fa-2x text-yellow"></i>
                       <div className="card_inner">
                           <p className="text_primary-p">Topics</p>
                           <span className="font-bold text-title">348</span>
                       </div>
                   </div>

                   <div className="card">
                       <i className="fa fa-thumbs-up fa-2x text-green"></i>
                       <div className="card_inner">
                           <p className="text_primary-p">Likelihood</p>
                           <span className="font-bold text-title">678</span>
                       </div>
                   </div>

                </div>

                <div className="charts">
                    <div className="charts_left">

                        <div className="charts_left_title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>

                        <i className="fa fa-use"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts_right">

                        <div className="card1">
                            <h1>Intensity</h1>
                            <p>75000</p>
                        </div>

                        <div className="card2">
                            <h1>Likelihood</h1>
                            <p>124,000</p>
                        </div>

                        <div className="card3">
                            <h1>Relevance</h1>
                            <p>5000</p>
                        </div>

                        <div className="card4">
                            <h1>Year</h1>
                            <p>1880</p>
                        </div>

                        <div className="card5">
                            <h1>Country</h1>
                            <p>150</p>
                        </div>

                        <div className="card6">
                            <h1>Topics</h1>
                            <p>75000</p>
                        </div>

                        <div className="card7">
                            <h1>Region</h1>
                            <p>7500</p>
                        </div>

                        <div className="card8">
                            <h1>City </h1>
                            <p>7468</p>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main;