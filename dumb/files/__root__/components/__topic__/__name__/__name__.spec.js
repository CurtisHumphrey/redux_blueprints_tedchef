import React from 'react'
import {
  shallow,
} from 'enzyme'
import _ from 'lodash'

import {
  <%= pascalEntityName %>,
} from './<%= pascalEntityName %>'

// import stylesClass from './<%= pascalEntityName %>.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

export const <%= pascalEntityName %>_specs = describe('<<%= pascalEntityName %> />', () => {
  let sandbox
  let props

  beforeEach(() => {
    sandbox = sinon.sandbox.create()

    require('react-proptype-error-catcher')(sandbox)

    props = {
    }
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('general', () => {
    it('with normal props it should render without errors', () => {
      const wrapper = shallow(<<%= pascalEntityName %> {...props} />)
      expect(wrapper).to.exist
    })
  })
  describe('behaviors', () => {
  })
})
