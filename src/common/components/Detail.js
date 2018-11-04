import React from 'react'
import { Mutation } from 'react-apollo'
import { history } from '../../utils'
import ck_red from '../images/ck_red.png'
export default ({
  element,
  match: { params, path },
  deleteElement,
  getElements
}) => {
  const pathBack = path.replace('/:id', '')
  const elementArr = element.filter(({ id }) => id === params.id)
  const elementObj = elementArr.length ? elementArr[0] : history.push(pathBack)
  return elementObj ? (
    <>
      {Object.entries(elementObj).map(([key, value]) => (
        //console.log(key)
        key !== 'img' ? <h3>{`${key}: ${value}`}</h3> : <img src={ck_red.png} alt='nike'/>
        // if(${key} == 'img') {
        //   <link rel="icon" href="%PUBLIC_URL%/images/${values}">
        // }
        // <h3>{`${key}: ${value}`}</h3>
      ))}
      {deleteElement && (
        <Mutation
          mutation={deleteElement}
          onCompleted={() => history.push(path.replace('/:id', ''))}
          refetchQueries={() => [
            {
              query: getElements
            }
          ]}
        >
          {deleteElelementFn => (
            <button
              onClick={() =>
                deleteElelementFn({ variables: { id: elementObj.id } })
              }
            >
              Delete!
            </button>
          )}
        </Mutation>
      )}
    </>
  ) : (
    'Empty'
  )
}
