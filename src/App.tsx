import { Tooltip } from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'

const App = () => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='my-auto mx-8 max-w-md flex flex-col gap-4'>
        <p className='text-xl'>
          You've stumbled across the digital space of <i>Kiandra Ginevra</i>. I'm a{' '}
          <a
            href='https://code.bykiandra.com'
            target='_blank'
            data-tooltip-id='frontenddev'
            data-tooltip-content='My developer portfolio'
            data-tooltip-place='top'
          >
            front-end developer
          </a> based in Australia. 
        </p>
        <p>
          When I'm not{' '}
          <a
            href='https://github.com/crownedfoxes'
            target='_blank'
            data-tooltip-id='github'
            data-tooltip-content='My Github page'
            data-tooltip-place='top'
          >
            writing code
          </a>, I enjoy playing video games, drawing,{' '}
          <a
            href='https://www.last.fm/user/crownedfoxes'
            target='_blank'
            data-tooltip-id='lastfm'
            data-tooltip-content='My Last.fm profile'
            data-tooltip-place='top'
          >
            listening to music
          </a> and binge watching Netflix.
        </p>
        <p className='flex gap-12'>
          <a href='https://code.bykiandra.com' className='site'><i>code</i><span>Developer Portfolio</span></a>
          <a href='#' className='site'><i>thoughts</i><span>Blog &bull; Coming Soon</span></a>
        </p>
        <p className='flex gap-4 border-t border-mint-light mt-1 pt-4'>
          <a href='https://github.com/crownedfoxes' target='_blank'>Github</a>
          <a href='https://twitter.com/crownedfoxes' target='_blank'>Twitter</a>
        </p>
      </div>
      <Tooltip id='frontenddev' className='tooltip' />
      <Tooltip id='github' className='tooltip' />
      <Tooltip id='lastfm' className='tooltip' />
    </div>
  )
}

export default App
