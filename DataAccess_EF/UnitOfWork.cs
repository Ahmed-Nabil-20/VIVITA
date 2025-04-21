using Domain.Interfaces_Repository;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess_EF.Repositories;

namespace DataAccess_EF
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext context;
        public IContactRepository TbContacts { get; private set; }
        public ISpecializationRepository TbSpecialization { get; private set; }
        public IDoctorRepository TbDoctors { get; private set; }
        public IClinicImageRepository TbClinicImages { get; private set; }
        public IRegistrationRequestsRepository TbRegistrationRequests { get; private set; }
        public IPatientRepository TbPatients { get; private set; }
        public ILungCancerRepository TbLungCancer { get; private set; }
        public IParkinsonRepository TbParkinson { get; private set; }


        public UnitOfWork(ApplicationDbContext context)
        {
            this.context = context;
            TbContacts = new ContactRepository(context);
            TbSpecialization = new SpecializationRepository(context);
            TbDoctors = new DoctorRepository(context);
            TbClinicImages = new ClinicImageRepository(context);
            TbRegistrationRequests = new RegistrationRequestsRepository(context);
            TbPatients = new PatientRepository(context);
            TbLungCancer = new LungCancerRepository(context);
            TbParkinson = new ParkinsonRepository(context); 
        }



        public async Task<int> Complete()
        {
            return await context.SaveChangesAsync();
        }
        public void Dispose()
        {
            context.Dispose();
        }
    }
}
