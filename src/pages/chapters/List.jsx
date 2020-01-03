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
        { id: 1, name: 'list chapters 1' },
        { id: 2, name: 'list chapters 2' },
      ]
    }
  }

  render() {
    const { data } = this.state
    return (
      <BaseLayout>
        <div className="content-wrapper">
          <ContentHeader title='List Chapters' />
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">List Chapters</h3>
                    <ButtonAction title='Add chapters' icon='fas fa-plus' class='btn btn-primary float-right' url='/add-chapters' />
                  </div>
                  <Table data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

export default List
