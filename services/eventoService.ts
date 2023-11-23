import axios from 'axios';
import Evento from '../core/Evento';

interface ApiResponse {
    content: Evento[];
}
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzAwNzgzNTIzfQ.aTv8zi9fmAgRxXJFi1-vF0x7Z9xoOvOYUcv2yBdEOs03gPp6gDi-o15CL4s3LQThgfZmWIiriX0E7samR06DbQ';
const BASE_URL = 'http://localhost:8080';
export const fetchEventos = async (): Promise<Evento[]> => {

    const headers = {
        headers: {
            'Acess-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            'Acess-Control-Allow-Headers': 'Origin, X-Requested-with, Content-Type, Accept',
            'Authorization': `Bearer ${token}` 
        }
    }

    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/game`, headers);
        console.log(response.data.content)
        return response.data.content;
    } catch (error) {
        throw new Error('Erro ao buscar eventos');
    }
};

   /* try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/game`, {
            "email": "felipe@email.com",
            "password": "12345"
        }, headers);
        console.log(response.data.content)
        return response.data.content;
    } catch (error) {
        throw new Error('Erro ao buscar eventos');
    }
};*/

export const atualizarEvento = async (evento: Evento): Promise<void> => {

    
    try {
        await axios.put(`${BASE_URL}/game/${evento.id}`, evento);
    } catch (error) {
        throw new Error('Erro ao atualizar o evento');
    }
};

export const deleteEvento = async (id: number) => {
    try {
        await axios.delete(`${BASE_URL}/eventos/${id}`);
    } catch (error) {
        throw new Error('Erro ao deletar evento');
    }
};
