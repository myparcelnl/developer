import { GitPluginOptions, checkGitRepo, getContributors, getCreatedTime, getUpdatedTime } from '@vuepress/plugin-git';
import { Page, Plugin } from 'vuepress';
import { Octokit } from '@octokit/core';

type GitConfig = {
  git: {
    createdTime?: number,
    updatedTime?: number,
    contributors?: any,
    gitHubContributors?: any
  }
};

export const gitPlugin: Plugin<GitPluginOptions> = (
  { createdTime, updatedTime, contributors },
  app,
) => {
  const cwd = app.dir.source();
  const isGitRepoValid = checkGitRepo(cwd);
  const repository = app.options.themeConfig.repo.replace(/https:\/\/github\.com\/(\w+\/\w+)/, '$1');

  const octokit = process.env.GITHUB_TOKEN
    ? new Octokit({ auth: process.env.GITHUB_TOKEN })
    : null;

  return {
    name: '@myparcel/vuepress-plugin-git',

    extendsPage: async(page: Page<GitConfig>) => {
      page.data.git = {};

      if (!isGitRepoValid || page.filePathRelative === null) {
        return;
      }

      if (createdTime !== false) {
        page.data.git.createdTime = await getCreatedTime(
          page.filePathRelative,
          cwd,
        );
      }

      if (updatedTime !== false) {
        page.data.git.updatedTime = await getUpdatedTime(
          page.filePathRelative,
          cwd,
        );
      }

      if (contributors !== false) {
        page.data.git.contributors = await getContributors(page.filePathRelative, cwd);

        if (octokit) {
          console.log(`GET /repos/${repository}/collaborators`);
          page.data.git.gitHubContributors = await octokit.request(`GET /repos/${repository}/collaborators`);
        }
      }
    },
  };
};
