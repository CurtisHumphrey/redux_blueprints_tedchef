import React from 'react'
import {
  shallow,
} from 'enzyme'

import {
  <%= pascalEntityName %>View,
  actions,
  selectors,
} from './<%= pascalEntityName %>View'

import _ from 'lodash'
import stylesClass from './<%= pascalEntityName %>View.scss'
const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

describe('<%= pascalEntityName %>', () => {
  let sandbox
  let props
  let prop_actions
  let prop_selectors

  beforeEach(() => {
    sandbox = sinon.sandbox.create()

    sandbox.stub(console, 'error', (message) => {
      throw new Error(message)
    })

    prop_actions = {
    }
    prop_selectors = {
    }

    props = {
      ...prop_selectors,
      ...prop_actions,
    }
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('general', () => {
    it('with normal props it should render without errors', () => {
      const wrapper = shallow(<<%= pascalEntityName %>View {...props} />)
      expect(wrapper).to.exist
    })
    it('redux actions for connect should have these keys', () => {
      expect(actions).to.contain.all.keys(prop_actions)
    })
    it('redux selectors for connect should have these keys', () => {
      expect(selectors).to.contain.all.keys(prop_selectors)
    })
  })
})
