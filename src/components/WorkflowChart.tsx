import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Customer Request' },
    position: { x: 250, y: 0 },
    style: { background: '#0A2540', color: 'white' }
  },
  {
    id: '2',
    data: { label: 'AI Processing' },
    position: { x: 250, y: 100 },
    style: { background: '#33C3F0', color: 'white' }
  },
  {
    id: '3',
    data: { label: 'Task Assignment' },
    position: { x: 250, y: 200 },
    style: { background: '#FFD700' }
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Service Completion' },
    position: { x: 250, y: 300 },
    style: { background: '#0A2540', color: 'white' }
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
];

const WorkflowChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Automated Workflow Process
        </h2>
        <div className="h-[600px] border border-gray-200 rounded-lg">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Background />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
};

export default WorkflowChart;