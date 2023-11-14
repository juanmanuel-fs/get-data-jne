
interface SimpleLabelInfoCandidateProps {
  label: string
  info: string
  className?: string
}

function SimpleLabelInfoCandidate({label, info, className}:SimpleLabelInfoCandidateProps) {
  return (
    <div className={`rounded-xl border border-black-22 p-2 px-4 ${className}`}>
      <span className="block text-footnote mb-1">{label}</span>
      <p className="text-headline font-normal text-black-100">{info}</p>
    </div>
  )
}

export default SimpleLabelInfoCandidate