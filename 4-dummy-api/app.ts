enum UserRole {
    ADMIN = 'admin',
    MODERATOR = 'moderator',
    USER = 'user'
}

interface UsersData {
    limit: number;
    skip: number;
    total: number;
    users: Array<{
        firstName: string;
        lastName: string;
        role: UserRole;
        [key: string]: string | number | object;
    }>;
}

async function getUser(url: string): Promise<void> {
    try {
        const resolve = await fetch(url);

        if (!resolve.ok) {
            throw new Error(`HTTP error! status: ${resolve.status}`);
        }

        const data: UsersData = await resolve.json();
        if (Array.isArray(data.users)) {
            data.users.forEach(user => {
                console.log(`Имя: ${user?.firstName} ${user?.lastName}, Возраст: ${user?.age}, Роль: ${user?.role}`);
            })
        }
    } catch(error) {
        if (error instanceof Error) {
            console.log('Ошибка', error.message);
        } else {
            console.error('Произошла неизвестная ошибка', error);
        }
    }
}

getUser('https://dummyjson.com/users');