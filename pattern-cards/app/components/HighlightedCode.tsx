import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type HighlightedCodeProps = {
  code: string
}

export const HighlightedCode = ({ code }: HighlightedCodeProps) => (
  <SyntaxHighlighter language="typescript" style={oneDark} wrapLines>
    {code}
  </SyntaxHighlighter>
)