module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    questions: {
      type: {
        description: '选择commit类型',
        enum: {
          feat: {
            description: '新功能',
            title: '新功能',
            emoji: '✨'
          },
          fix:{
            description: 'bug修复',
            title: 'bug修复',
            emoji: '🐛'
          },
          style: {
            description: '需影响代码功能的格式修改',
            title: '代码格式',
            emoji: '💎',
          },
          test: {
            description: '添加或修改测试',
            title: '测试',
            emoji: '🚨',
          },
          build: {
            description: '影响打包构建的依赖或代码修改',
            title: '构建',
            emoji: '🛠',
          },
          refactor: {
            description: '非bug修复或新功能添加的code修改',
            title: '重构',
            emoji: '📦',
          },
          perf: {
            description: '提高代码运行效率',
            title: '优化',
            emoji: '🚀',
          },
          docs: {
            description: '文档新增或修改',
            title: '文档',
            emoji: '📚',
          },
          ci: {
            description: 'CI/CD 修改',
            title: 'CI/CD',
            emoji: '⚙️',
          },
          chore: {
            description: "其他不涉及src或测试文件的更改",
            title: '杂物',
            emoji: '♻️',
          },
          revert: {
            description: '回滚到之前的commit',
            title: '回滚',
            emoji: '🗑',
          },
        }
      },
      scope: {
        description: '修改涉及范围 (组件或文件名称)',
      },
      subject: {
        description: '修改内容概述',
      },
      body: {
        description: '修改内容详细信息',
      },
      isBreaking: {
        description: '是否为非兼容修改?',
      },
      breaking: {
        description: '兼容修改概述',
      },
      breakingBody: {
        description: '非兼容修改详细信息',
      },
      isIssueAffected: {
        description: '是否影响issues?',
      },
      issues: {
        description: 'issues影响概述 (e.g. "fix #123", "re #123".)',
      },
      issuesBody: {
        description: 'issues影响详细信息',
      },
      
    }
  }
}