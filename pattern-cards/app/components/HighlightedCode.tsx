import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkCold } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type HighlightedCodeProps = {
  code: string
}

const highlightedCodeStyle = {
    ...coldarkCold,
    'pre[class*="language-"]': {
      ...coldarkCold['pre[class*="language-"]'],
      background: 'transparent',
    },
    'code[class*="language-"]': {
      ...coldarkCold['code[class*="language-"]'],
      background: 'transparent',
    },
    'span': {
      ...coldarkCold['span'],
      backgroundColor: 'transparent',
    },
  }

export const HighlightedCode = ({ code }: HighlightedCodeProps) => (
  <SyntaxHighlighter 
    language="typescript" 
    style={highlightedCodeStyle} 
    wrapLines 
    className="absolute z-3 bottom-14 right-4 h-6/7 w-6/9"
    customStyle={{
      fontSize: '11px'
    }}
  >
    {code}
  </SyntaxHighlighter>
)