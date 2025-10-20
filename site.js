         const closedb = document.getElementById('close')
          const learn = document.getElementById('learn')
          const sec1 = document.getElementById('sec1')
          const lang = document.getElementById('lang')
          const bar = document.getElementById('bar')
          const sideb = document.getElementById('sideb')
          const xmax = document.getElementById('xmax')
          const dd1 = document.getElementById('dd1')
          const dd2 = document.getElementById('dd2')
          const dd3 = document.getElementById('dd3')






          closedb.addEventListener('click',()=>{
            lang.style.display = 'none'
            sec1.style.filter = 'none'

          })

          learn.addEventListener('click',()=>{
            lang.style.display = 'flex'
            sec1.style.filter = 'blur(20px)'
          })

          bar.addEventListener('click',()=>{
            sideb.classList.toggle('app')
            dd1.classList.toggle('d1')
            dd2.classList.toggle('d2')
            dd3.classList.toggle('d3')


            
          })
      