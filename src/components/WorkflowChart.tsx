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
    data: { 
      label: (
        <div className="flex flex-col items-center gap-2">
          <img src="https://cdn-icons-png.flaticon.com/512/2175/2175377.png" alt="CRM" className="w-8 h-8" />
          <span>CRM System</span>
        </div>
      )
    },
    position: { x: 250, y: 0 },
    style: { background: '#0A2540', color: 'white' }
  },
  {
    id: '2',
    data: { 
      label: (
        <div className="flex flex-col items-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-8 h-8" />
          <span>Python Processing</span>
        </div>
      )
    },
    position: { x: 250, y: 100 },
    style: { background: '#33C3F0', color: 'white' }
  },
  {
    id: '3',
    data: { 
      label: (
        <div className="flex flex-col items-center gap-2">
          <img src="https://play-lh.googleusercontent.com/xQ5K9Zs-UfPNqX9N6vbYj-m-FYoFpMvqAXTvEF9i5R0WKaQA3G5GqFdHfpXGQQ0jUQ" alt="ManyChat" className="w-8 h-8" />
          <span>ManyChat</span>
        </div>
      )
    },
    position: { x: 250, y: 200 },
    style: { background: '#FFD700' }
  },
  {
    id: '4',
    type: 'output',
    data: { 
      label: (
        <div className="flex flex-col items-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
          <span>WhatsApp API</span>
        </div>
      )
    },
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
        <div className="h-[400px] border border-gray-200 rounded-lg">
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