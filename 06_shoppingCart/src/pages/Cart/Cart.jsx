import React from 'react'

function Cart({items}) {
  return (
    <>
    <div className='bg-slate-600 m-0'>
      <article className='w-10/12 h-10/12 bg-slate-400 m-auto  rounded-md'>
        <ul>
          {items && items.map((item)=>(
            <li key={item.id}>
              <section>
                <h2>{item.title}</h2>
                <img src={item.image} alt="" width={120}/>
                <p>Cost: $ {item.price}</p>
              </section>
            </li>
          ))}
          </ul>
          <section>
             <h2>Total cost : $ {items.reduce((a,b)=>a+b.price,0)}</h2>
          </section>
      </article>
    </div>

    </>
  )
}

export default Cart