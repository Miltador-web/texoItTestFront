import React from "react";
import './Dash.css'
import Card1 from "../Cards/Card1";
import Card2 from "../Cards/Card2";
import Card3 from "../Cards/Card3";
import Card4 from "../Cards/Card4";

export default () =>
<div>
<table className="tabela">
        <tr>
            <td><Card1 title = "List year with muiltiples winners" /></td>
            <td><Card2 title = "List year with muiltiples winners" /></td>
        </tr>
        <tr>
            <td><Card3 title = "List year with muiltiples winners"  /></td>
            <td><Card4 title = "List year with muiltiples winners"  /></td>
        </tr>
    </table>
</div>