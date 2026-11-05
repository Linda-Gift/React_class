import { useNavigate } from "react-router-dom"

export default function PreferencePage(){
    // const navigate = useNavigate()

    return(
        <div className="preference-container">
            <div className="preference-heading">
                <h1>Preference</h1>
            </div>

            <div className="language-pref">
                <div className="label">
                    <p>Language</p>
                </div>

                <div className="currencyoption">
                    <p>English</p>
                    <select name="options" id="language">
                        <option value="eng">English</option>
                        <option value="fr">French</option>
                        <option value="yor">Yoruba</option>
                    </select>
                </div>
            </div>

            <div className="language-pref">
                <div className="label">
                    <p>Currency</p>
                </div>

                <div className="currencyoption">
                    <p>Dollars</p>
                    <select name="options" id="language">
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="ngn">NGN</option>
                    </select>
                </div>
            </div>

            <div className="language-pref">
                <div className="label">
                    <p>Date Format</p>
                </div>

                <div className="currencyoption">
                    <p>MM/DD/YY</p>
                    <select name="options" id="language">
                        <option value="mm">MM/DD/YY</option>
                        <option value="dd">DD/MM/YY</option>
                        <option value="yy">YY/MM/DD</option>
                    </select>
                </div>
            </div>

            <div className="language-pref">
                <div className="label">
                    <p>Time Zone</p>
                </div>

                <div className="currencyoption">
                    <p>WAT</p>
                    <select name="options" id="language">
                        <option value="cat">CAT</option>
                        <option value="gmt">GMT +1</option>
                        <option value="eat">EAT</option>
                    </select>
                </div>
            </div>
            

            
        </div>
    )
}