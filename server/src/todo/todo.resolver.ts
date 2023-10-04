import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { TodoModel } from './model/todo.model';
import { CreateTodoInput } from './dto/todo-input.dto';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) { }

  //find all todo
  @Query(() => [TodoModel])
  async findAllTodo(): Promise<TodoModel[]> {
    return this.todoService.findAllTodo()
  }

  @Query(() => [TodoModel])
  async findAllTodoByUserId(@Args('userId') userId: string): Promise<TodoModel[]> {
    return this.todoService.findAllTodoByUserId(userId)
  }

  @Query(() => TodoModel)
  async findAllTodoById(@Args('id') id: string): Promise<TodoModel> {
    return this.todoService.findAllTodoById(id)
  }

  //create todo
  @Mutation(() => TodoModel)
  async createTodo(@Args('dto') dto: CreateTodoInput): Promise<TodoModel> {
    return this.todoService.createTodo(dto)
  }

  //complete todo
  @Query(() => TodoModel)
  async completeTask(@Args('id') id: string): Promise<TodoModel> {
    return this.todoService.completeTask(id)
  }

  //delete todo
  @Query(() => TodoModel)
  async deleteTodo(@Args('id') id: string): Promise<TodoModel> {
    return this.todoService.deleteTodo(id)
  }

}
