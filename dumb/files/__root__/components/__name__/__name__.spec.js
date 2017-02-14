import React from 'react'
import {
  shallow,
} from 'enzyme'
import proptype_error_catcher from 'react-proptype-error-catcher'

import <%= pascalEntityName %> from './<%= pascalEntityName %>'

// import _ from 'lodash'
// import stylesClass from './<%= pascalEntityName %>.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

describe('<<%= pascalEntityName %> />', () => {
  let sandbox
  let props

  beforeEach(() => {
    sandbox = sinon.sandbox.create()

    proptype_error_catcher(sandbox)

    props = {}
  })

  afterEach(() => {
    sandbox.restore()
  })
  it('with normal props it should render without errors', () => {
    const wrapper = shallow(<<%= pascalEntityName %> {...props} />)
    expect(wrapper).to.exist
  })
})
