import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../datatab/datatab.css"
import TextField from '@material-ui/core/TextField';
import { render } from "@testing-library/react";
import Dtpic from "../dtpic/dtpic";

const Datatab = (props) => {
  const history = useHistory();
  const [users, setUser] = useState([]);
  //const [gr, setgr] = useState(  {users.map((user, index) => (  {user.ErrGr_Col}  ))}  );
  const loadUsers = async () => {
    let dtApi = document.getElementById("start").value + "&" + document.getElementById("end").value
    const result = await axios.get(`http://localhost:62499/api/zplist/${dtApi}`);
    setUser(result.data);
  };

  return (
    <div>
      <h3></h3>
      <Button onClick={loadUsers} variant="contained" color="secondary">
        Получить
      </Button>

      <h4></h4>
      <h4></h4>
      <div >
        <table className="mytab">
          <thead >
            <tr>
              <th className="th1" scope="col">#</th>
              <th className="th1" scope="col">Фамилия</th>
              <th className="th1" scope="col">Кол-во SKU</th>
              <th className="th1" scope="col">Кол-во SKU проверено</th>

              <th className="th1" scope="col">кол-во ошибок GR</th>
              <th className="th1" scope="col">кол-во ошибок SA</th>
              <th className="th1" scope="col">кол-во ошибок по BMC</th>
              <th className="th1" scope="col">Сумма штрафа</th>
              <th className="th1" scope="col">даты</th>
              <th className="th1">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th className="th1" scope="row">{index + 1}</th>
                <td className="td1">{user.id}</td>
                <td className="td1">{user.UserOperationID_21_Col}</td>
                <td className="td1">{user.UserOperationID_22_Col}</td>

                
                <td className="td1"><TextField className="mytab rowsa" value={user.ErrSa_Col} variant="outlined" /></td>
                <td className="td1"><TextField className="mytab rowwms" value={user.ErrWMS_Col} variant="outlined" /></td>
                <td className="td1"><TextField className="mytab rowff" value={user.forfeit} variant="outlined" /></td>


                <td className="td1">{user.OperationDate_Col}</td>

                <td className="td1"><Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    history.push(`http://localhost:62499/api/zplist/${user.id}&` + document.getElementById('start').value + '-' + document.getElementById('end')
                      .value + `${user.ErrGr_Col}&${user.ErrSa_Col}&${user.ErrWMS_Col}&${user.forfeit}`)

                    // await axios.get(
                    //   `http://localhost:62499/api/zplist/${user.id}&`+document.getElementById('start').value + '-' + document.getElementById('end').value+`${user.ErrGr_Col}&${user.ErrSa_Col}&${user.ErrWMS_Col}&${user.forfeit}`
                    // );
                  }

                  }
                >
                  Edit
                </Button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}


export default Datatab;
