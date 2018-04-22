import React, { Component } from 'react';
import './add-item.css'
class AddItem extends Component {

  render() {

    return (
      <div>
        <h1 className="title"> Добавление/Редактирование</h1>

        <form className="form">

          <div className="form-group row form-item">
            <div className="col-md-1"></div>
            <label for="name" class="col-md-2 col-form-label">ФИО</label>

            <div className="col-md-8">
              <input className="form-control" />
            </div>
          </div>

          <div className="form-group row form-item">
            <div className="col-md-1"></div>
            <label for="date" className="col-md-2 col-form-label">Дата</label>

            <div className="col-md-8">
              <input className="form-control" />
            </div>
          </div>

          <div className="form-group row form-item">
            <div className="col-md-1"></div>
            <label for="person" className="col-md-2 col-form-label">Список1</label>
            <div className="col-md-8">
              <select className="form-control">
                <option>ОРВ</option>
                <option>иммунодефицит</option>
              </select>
            </div>
          </div>

          <div className="form-group row form-item">
            <div className="col-md-1"></div>
            <label for="person" className="col-md-2 col-form-label">Список2</label>
            <div className="col-md-8">
              <select className="form-control">
                <option>хронический</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8"></div>
            <div class="col-md-4">
              <input type="submit" class="btn btn-primary save-btn" value="Сохранить" />
              <button type="button" class="btn btn-danger">Отменить</button>
            </div>
          </div>

        </form>
      </div >
    )
  }
}

export default AddItem;