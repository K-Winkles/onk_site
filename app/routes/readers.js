import Route from '@ember/routing/route';

export default class ReadersRoute extends Route {
    model(){
        return [
                'Kiana Alessandra', 'Bea Tiwaquen',
                'David Lucero', 'Astrid Something',
                'Aileen Santiago', 'Yza Segovia'
               ]
    }
}
