declare class UserService {
    private userRepository;
    private postRepository;
    constructor();
    getUser: () => Promise<any>;
    registers: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<string>;
    findByIdUser: (username: any) => Promise<any>;
    deleteUser: (id: any) => Promise<void>;
    updateUser: (id: any, newUser: any) => Promise<void>;
    findIdUsers: (id: any) => Promise<any>;
    deleteAccount: (id: any) => Promise<void>;
    adminSearchUsername: (username: any) => Promise<any>;
    getFriend: (userId: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
