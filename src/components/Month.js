import React from 'react'
import Day from './Day'

export default function Month({month}) {
  return (
    <div className="flex gap-0 flex-wrap h-screen w-screen">
        <div className="px-60 py-5 h-screen flex-1 grid grid-cols-7 grid-rows-20 md:box-content">
            {month.map((row,i) => (
                <React.Fragment key={i}>
                  {row.map((day, idx ) => (

                    <Day day={day} key={idx} rowIdx={i}/>

                  ))}
                </React.Fragment>
            ))}
        </div>  
        <div className="py-20 flex-1 grid grid-cols-1 grid-rows-20">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>         
        </div>
    </div>
  )
}
