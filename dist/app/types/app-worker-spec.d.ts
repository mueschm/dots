import { IAppVariableDefinition, IGithubSource, IGitSource, IImageSource } from ".";
export interface IAppWorkerSpec {
    build_command?: string;
    dockerfile_path?: string;
    environment_slug?: string;
    envs?: IAppVariableDefinition[];
    git?: IGitSource;
    github?: IGithubSource;
    gitlab?: IGithubSource;
    image?: IImageSource;
    instance_count?: number;
    instance_size_slug?: string;
    name: string;
    run_command?: string;
    source_dir?: string;
}
