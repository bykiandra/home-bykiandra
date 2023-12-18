const App = () => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='my-auto mx-8 max-w-md flex flex-col gap-4'>
        <p className='text-xl'>
          You've stumbled across the digital space of <i>Kiandra Ginevra</i>. I'm a{' '}
          <a href='https://code.bykiandra.com' target='_blank'>front-end developer</a> based in Australia. 
        </p>
        <p>
          When I'm not{' '}
          <a href='https://github.com/crownedfoxes' target='_blank'>writing code</a>, I enjoy playing video games, drawing,{' '}
          <a href='https://www.last.fm/user/crownedfoxes' target='_blank'>listening to music</a> and binge watching Netflix.
        </p>
        <p className='flex gap-4'>
          <a href='https://github.com/crownedfoxes' target='_blank'>Github</a>
          <a href='https://twitter.com/crownedfoxes' target='_blank'>Twitter</a>
        </p>
      </div>
    </div>
  )
}

export default App
