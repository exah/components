import renderer from 'react-test-renderer'

const renderJSON = (element) => renderer.create(element).toJSON()

export {
  renderJSON
}
