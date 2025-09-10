# Getting Started

<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/29326762?v=4',
    name: 'Oleg Zaytsev',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/imozi' },
    ]
  },
]
</script>

## Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members />
