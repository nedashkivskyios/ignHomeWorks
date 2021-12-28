import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
  _id: number
  name: string
  priority: string
}
export type AffairDataType = Array<AffairType>
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairDataType = [ // need to fix any
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'anime', priority: 'low'},
  {_id: 3, name: 'games', priority: 'low'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairDataType, filter: FilterType): AffairDataType => {
  if (filter === 'all') return affairs
  else return affairs.filter(aff => aff.priority === filter)
}
export const deleteAffair = (affairs: AffairDataType, _id: number): AffairDataType => { // need to fix any
  return affairs.filter(aff => aff._id !== _id)
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairDataType>(defaultAffairs)
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

  return (
    <div>
      {/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />


      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}

    </div>
  )
}

export default HW2