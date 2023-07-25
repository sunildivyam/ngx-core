# @annuadvent/ngx-core:

The `ngx-core` library serves as the foundation for the other libraries in the group. It provides core functionalities and abstractions that are utilized across the entire suite of libraries. This includes common services for handling authentication, API communication, error handling, and state management. Furthermore, ngx-core seamlessly integrates with Firebase, a widely-used backend as a service (BaaS) platform, offering functionalities such as real-time database synchronization, cloud storage, and authentication services.

[ngx-core Documentation](https://ngx-libs.annuadvent.com/libs/ngx-core)

[ngx-core Github](https://github.com/sunildivyam/ngx-core)

[ngx-core NPM](https://npmjs.com/package/@annuadvent/ngx-core)

## What this ngx-core library should contain:
    - ngx-core should have fully independent modules/services/interfaces/pipes/constants etc.
    - It should not contain UI components. Better define them in ngx-common-ui or other specefic library projects.

## Workspace repository
- To contribute code with `ngx-core` library, it is recommended to work through `ngx-workspace` project, that integrates all libraries and provides all required scripts to `build, deploy and test` them.
- [ngx-workspace Github](https://github.com/sunildivyam/ngx-workspace)
