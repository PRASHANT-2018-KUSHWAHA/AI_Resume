import { Project, LogEntry } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fooddarzee',
    title: 'FoodDarzee',
    description: 'Architecture Deep-Dive',
    problem: 'High-latency onboarding and complex payment flows were causing a 42% drop-off rate. The existing legacy system struggled with concurrent state updates during user subscription paths.',
    architecture: 'Engineered a real-time onboarding engine via WebSockets for instant validation. Implemented a microservices-based payment orchestrator to handle multi-step subscription logic asynchronously.',
    impact: [
      { label: 'Conversion', value: '+35%' },
      { label: 'Latency', value: '20ms' },
      { label: 'Load_Capacity', value: '10x' }
    ],
    tags: ['Angular_v14', 'Node.js', 'WebSocket', 'Stripe_API', 'Redis'],
    status: 'Deployed_Stable'
  },
  {
    id: 'coinbase',
    title: 'Coinbase',
    description: 'Trading Engine Optimization',
    problem: 'Scalable order-matching engine for high-frequency crypto trading required sub-millisecond execution and high availability.',
    architecture: 'Optimized the matching engine using LMAX Disruptor pattern and zero-copy networking. Implemented distributed locking via Etcd.',
    impact: [
      { label: 'Throughput', value: '1M/sec' },
      { label: 'P99 Latency', value: '0.5ms' },
      { label: 'Reliability', value: '99.99%' }
    ],
    tags: ['Go', 'gRPC', 'Kafka', 'Kubernetes', 'Redis'],
    status: 'Active_Node'
  },
  {
    id: 'airamed',
    title: 'Airamed',
    description: 'Telemedicine Infrastructure',
    problem: 'HIPAA compliant telemedicine platform with integrated EHR sync required secure, real-time video and data streaming.',
    architecture: 'Built a WebRTC-based video engine with end-to-end encryption. Designed a secure data bridge for HL7/FHIR integration.',
    impact: [
      { label: 'Uptime', value: '99.95%' },
      { label: 'Sync Speed', value: '< 1s' },
      { label: 'Security', value: 'HIPAA' }
    ],
    tags: ['React', 'WebRTC', 'Python', 'PostgreSQL', 'AWS'],
    status: 'Stable_Release'
  }
];

export const LOGS: LogEntry[] = [
  { timestamp: '14:02:11', type: 'EVENT_PUSH', message: 'Node_04 connected to main cluster.' },
  { timestamp: '14:02:45', type: 'AUTH_SYNC', message: 'Security handshakes completed across 12 zones.' },
  { timestamp: '14:03:02', type: 'CACHE_CLR', message: 'Cleaning temporary buffer...' },
  { timestamp: '14:03:15', type: 'SYS_READY', message: 'All systems operational. Monitoring active.' }
];
