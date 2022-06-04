import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AppModule } from '../src/app.module';
import { LocalSigninDto, LocalSignupDto } from '../src/auth/dto';
import { PrismaService } from '../src/prisma/prisma.service';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    await app.listen(5000);

    prisma = app.get(PrismaService);
    await prisma.cleadDb();

    pactum.request.setBaseUrl('http://localhost:5000/api/v1');
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    describe('Signup', () => {
      const dto: LocalSignupDto = {
        name: 'Neema Adam',
        email: 'neema@neicore.com',
        password: 'brief_mortal_life',
      };

      it('Should throw a bad request error if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/local/signup')
          .withBody({ name: dto.name, password: dto.password })
          .expectStatus(400);
      });

      it('Should throw a bad request error if name is empty', () => {
        return pactum
          .spec()
          .post('/auth/local/signup')
          .withBody({ email: dto.email, password: dto.password })
          .expectStatus(400);
      });

      it('Should throw a bad request error if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/local/signup')
          .withBody({ name: dto.name, email: dto.email })
          .expectStatus(400);
      });

      it('Should throw a bad request error if no dto is provided', () => {
        return pactum.spec().post('/auth/local/signup').expectStatus(400);
      });

      it('Should signup', () => {
        return pactum
          .spec()
          .post('/auth/local/signup')
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe('Signin', () => {
      const dto: LocalSigninDto = {
        email: 'neema@neicore.com',
        password: 'brief_mortal_life',
      };

      it('Should throw a bad request error if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/local/signin')
          .withBody({ password: dto.password })
          .expectStatus(400);
      });

      it('Should throw a bad request error if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/local/signin')
          .withBody({ email: dto.email })
          .expectStatus(400);
      });

      it('Should throw a bad request error if no dto is provided', () => {
        return pactum.spec().post('/auth/local/signin').expectStatus(400);
      });

      it('Should signin', () => {
        return pactum
          .spec()
          .post('/auth/local/signin')
          .withBody(dto)
          .expectStatus(200)
          .stores('userAt', 'access_token');
      });
    });
  });
});
