import React, { use } from 'react';
import GroupDetailClient from './GroupDetailClient';

interface GroupPageProps {
  params: Promise<{ id: string }>;
}

export default async function GroupDetailPage({ params }: GroupPageProps) {
  const resolvedParams = await params;
  return <GroupDetailClient id={resolvedParams.id} />;
}

export function generateStaticParams() {
  return [
    { id: 'st-mark' },
    { id: 'st-andrew' },
    { id: 'st-jude' },
    { id: 'st-simon' },
    { id: 'st-philip' },
    { id: 'st-paul' },
    { id: 'st-bartholomew' },
    { id: 'st-luke' },
    { id: 'st-michael' },
    { id: 'st-stephen' },
  ];
}
