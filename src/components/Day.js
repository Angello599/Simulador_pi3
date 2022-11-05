import React from 'react'

export default function Day({day, rowIdx}) {
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className='flex flex-col items-center'>
        {rowIdx === 0 && (<p>{day.format('ddd').toUpperCase()}</p>)}
      </header>
    </div>
  )
}

{/*

const days = 7;
const hoursOfDay = 16;
let currentDay = -1
const daysMatrix = new Array(hoursOfDay).fill([]).map(() => {
    return new Array(days).fill(null).map(() => {
        currentDay++;
        return 0;
    });
});
return daysMatrix;

className="border border-gray-200 flex flex-col"
      <header className='flex flex-col items-center'>
        {rowIdx=== 0 && (
          <p className='text-sm mt-1'>
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p className="text-sm p-1 my-q text-center" >
          {day.format('DD')}
        </p>
      </header>
*/}
