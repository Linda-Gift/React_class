export default function SecurityPage(){
    return(
        <div className="security-container">
            <div className="heading">
                <h1>Security Page</h1>
            </div>

            <div className="security-content">
                
            <div className="security-setting">
                <div className="security-heading">
                    <h3>Login and Authentication</h3>
                </div>
                <div className="list">
                    <ul>
                        <li>Two-Factor Authentication (2FA)</li>
                        <li>Auto logout</li>
                        <li>Change Password</li>
                    </ul>
                </div>
            </div>

            <div className="security-setting">
                <div className="security-heading">
                    <h3>Transaction Security</h3>
                </div>
                <div className="list">
                    <ul>
                        <li>Pin Setup</li>
                        <li>Spending Limits</li>
                        <li> One-Time Password (OTP) for Payments</li>
                    </ul>
                </div>
            </div>

            <div className="security-setting">
                <div className="security-heading">
                    <h3>Account Recovery</h3>
                </div>
                <div className="list">
                    <ul>
                        <li>Recovery Email</li>
                        <li>Phone Number Verification</li>
                        <li>Security Question</li>
                    </ul>
                </div>
            </div>

            <div className="security-setting">
                <div className="security-heading">
                    <h3>Data Protection</h3>
                </div>
                <div className="list">
                    <ul>
                        <li>Clear App Cache</li>
                        <li>Privacy Settings</li>
                        <li> Mask Sensitive Information</li>
                    </ul>
                </div>
            </div>
            </div>

            
        </div>
    )
}