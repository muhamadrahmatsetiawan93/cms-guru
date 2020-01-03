import React, { Component } from 'react'
import Table from '../../components/Table'
import ButtonAction from '../../components/ButtonAction'
import ContentHeader from '../../components/ContentHeader'
import BaseLayout from '../../components/BaseLayout'

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, name: 'list courses 1' },
        { id: 2, name: 'list courses 2' },
      ]
    }
  }

  render() {
    const { data } = this.state
    return (
        <div className="content-wrapper">
          <ContentHeader title='List Course' />
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">List Courses</h3>
                    <ButtonAction title='Add courses' icon='fas fa-plus' class='btn btn-primary float-right' url='/course/entry' />
                  </div>
                  <Table data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default List
