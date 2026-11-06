import React, { useState } from "react"


export default function NotificationPage(){
      // State to manage notification visibility
      const [income, setIncomeNotification] = useState(false)
      const [withdrawal, setWithdrawalNotification] = useState(false)
      const [stock, setStockNotification] = useState(false)
      const [investment, setInvestmentNotification] = useState(false)
      const [forex, setForexNotification] = useState(false)
      const [credit, setCreditNotification] = useState(false)
      const [security, setSecurityNotification] = useState(false)


      // Function to toggle the switch
      const toggleNotification = () => {
        setIncomeNotification((prev) => !prev)
      }
      const withdrawalNotification = () => {
        setWithdrawalNotification((prev) => !prev)
      }
      const stockNotification = () => {
        setStockNotification((prev) => !prev)
      }
      const investmentNotification = () => {
        setInvestmentNotification((prev) => !prev)
      }
      const forexNotification = () => {
        setForexNotification((prev) => !prev)
      }
      const creditScoreNotification = () => {
        setCreditNotification((prev) => !prev)
      }
      const securityNotification = () => {
        setSecurityNotification((prev) => !prev)
      }
    

    return(
        <div className="notification-container">
            <div className="heading">
                <h1>Notifications Setting</h1>
            </div>

            <div className="notification-and-toggle">
                <div className="notification-text">
                    <p>Income notification</p>
                </div>

                <div className="toggle">
                    <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={income}
                        onChange={toggleNotification}
                    />
                    <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="notification-and-toggle">
                <div className="notification-text">
                    <p>Withdrawal Notification</p>
                </div>

                <div className="toggle">
                    <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={withdrawal}
                        onChange={withdrawalNotification}
                    />
                    <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="notification-and-toggle">
                <div className="notification-text">
                    <p>Stock Market News</p>
                </div>

                <div className="toggle">
                    <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={stock}
                        onChange={stockNotification}
                    />
                    <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="notification-and-toggle">
                <div className="notification-text">
                    <p>Investment Updates</p>
                </div>

                <div className="toggle">
                    <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={investment}
                        onChange={investmentNotification}
                    />
                    <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="notification-and-toggle">
                <div className="notification-text">
                    <p>Forex Alert</p>
                </div>

                <div className="toggle">
                    <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={forex}
                        onChange={forexNotification}
                    />
                    <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="notification-and-toggle">
                <div className="notification-text">
                    <p>Credit Score Update</p>
                </div>

                <div className="toggle">
                    <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={credit}
                        onChange={creditScoreNotification}
                    />
                    <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="notification-and-toggle">
                <div className="notification-text">
                    <p>Security Notification</p>
                </div>

                <div className="toggle">
                    <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={security}
                        onChange={securityNotification}
                    />
                    <span className="slider"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}