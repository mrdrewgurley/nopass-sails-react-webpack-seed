import Store from '../../../assets/app/EmailLoginComponent/stores/EmailLoginStore'

const state = Store().getState()

/**
 * React.EmailLoginStore
 * @desc Tests for the Email Login Store
 */
describe('EmailLoginStore.state', () => {
  it('should match the initial snapshot', () => {
    expect(state).toMatchSnapshot()
  })
})
