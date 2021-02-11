export function getBasepath(): string {
    return location.hostname === 'localhost'
        ? '/'
        : '/a-mechanical-awakening';
}
