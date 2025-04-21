using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModels
{
    public class ModelPageVM
    {
        public TbLungCancer? LungCancer { get; set; }
        public TbParkinson? Parkinson { get; set; }
    }
}
