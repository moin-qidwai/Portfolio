export default function Projects() {
    return (
        <div className="mb-20">
            <div className="max-w-2xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Bachelor of Engineering (Computer Science)</h2>
                <h2 className="text-lg font-medium text-gray-900">University of Hong Kong (2012-2016)</h2>
                <p className="text-small font-light text-gray-500">Interesting Courses</p>
                <ul className="list-disc list-inside">
                    <li>Discrete Mathematics</li>
                    <li>Algorithms and Data Structures</li>
                    <li>Artificial Intelligence</li>
                    <li>Quantum Information</li>
                </ul>
            </div>

            <div className="max-w-2xl mx-auto py-2 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Master of Science (Computer Science)</h2>
                <h2 className="text-lg font-medium text-gray-900">Chinese University of Hong Kong (Ongoing)</h2>
                <p className="text-small font-light text-gray-500">Interesting Courses</p>
                <ul className="list-disc list-inside">
                    <li>Advanced Topics in Artificial Intelligence</li>
                </ul>
                <p className="text-small font-light text-gray-500">Research Essay</p>
                <a className="text-blue-500 underline" href="/ai_essay.pdf" target="_blank">A Proposal For Benchmarking Inverse Reinforcement Learning Agents</a>
                <p className="text-small font-light text-gray-500">Project Report</p>
                <a className="text-blue-500 underline" href="/report.pdf" target="_blank">Analysis of Contemporary Methodologies For Near-Real Time Collaboration</a>
            </div>

            <div className="max-w-2xl mx-auto py-2 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Personal Interests</h2>
                <ul className="list-disc list-inside">
                    <li>Superdense coding for n-dit systems in quantum information theory.</li>
                    <li>Peer to peer shared state management in distributed computing applications.</li>
                    <li>Lambda Calculus as an alternative computing model specially for theorem provers in the realm of logical verification.</li>
                </ul>
            </div>
        </div>
    )
}